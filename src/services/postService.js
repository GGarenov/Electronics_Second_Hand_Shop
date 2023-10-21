const Offer = require("../models/Offer");

exports.create = (offerData) => Offer.create(offerData);

exports.getAll = () => Offer.find();

exports.singleOffer = (offerId) => Offer.findById(offerId).populate();

exports.update = (offerId, offerData) => Offer.findByIdAndUpdate(offerId, offerData);

exports.delete = (offerId) => Offer.findByIdAndDelete(offerId);

exports.getMyOffers = (ownerId) => Offer.find({ owner: ownerId }).populate("owner");
