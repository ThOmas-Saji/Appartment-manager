const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    block: { type: String, required: true },
    flat_no: { type: Number, required: true },
    user_tenant_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }],
    user_owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flat = mongoose.model("flat", flatSchema);

module.exports = Flat;
