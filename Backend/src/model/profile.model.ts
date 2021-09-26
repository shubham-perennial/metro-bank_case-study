import {Document, Model, model, Schema} from "mongoose";

interface serviceCards {
    src: String;
    title: String;
}

interface Iprofile extends Document {
    accountNo: number;
    income: number;
    spends: number;
    currentServices: string[];
    availableServices: serviceCards[];
}

const profileSchema = new Schema<Iprofile>(
    {
        accountNo:{ type: Number, required: true},
        income:{ type: Number, required: true},
        spends:{ type: Number, required: true},
        currentServices:[{ type: Schema.Types.ObjectId, ref: "service",  required: true}],
        availableServices:[{ type: Schema.Types.ObjectId, ref: "service", required: true}]
    }, {
        versionKey: false,
        timestamps: true,
    }
)

const Profile: Model<Iprofile> = model("profile", profileSchema);
export default Profile;