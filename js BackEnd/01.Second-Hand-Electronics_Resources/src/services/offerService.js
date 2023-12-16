const Offer = require("../models/Offer");

exports.create = (offerData) => Offer.create(offerData);

exports.getAll = () => Offer.find();

exports.getSingleOffer = (offerId) =>
  Offer.findById(offerId).populate("buyingList");

exports.update = (offerId, offerData) =>
  Offer.findByIdAndUpdate(offerId, offerData);

exports.delete = (offerId) => Offer.findByIdAndRemove(offerId);

exports.searchOffers = (searchName, searchType) => {
  Offer.find({ searchName, searchType }).populate("offer");
};

exports.buyItem = async (offerId, userId) => {
  const offer = await this.getSingleOffer(offerId);
  const isExistingBuyer = offer.buyingList.some(
    (b) => b?.toString() === userId
  );

  if (isExistingBuyer) {
    return;
  }

  offer.buyingList.push(userId);
  return offer.save();
};
