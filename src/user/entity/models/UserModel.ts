import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export const UserSchemma = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
    },
    role: {
        type: String,
    },
    path_avatar: {
        type: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reviews'
        }
    ]
});


UserSchemma.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchemma.methods.isValidPassword = async function(password: any){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

UserSchemma.set('toJSON', { virtuals: true });
UserSchemma.set('toObject', { virtuals: true });

export default model('User', UserSchemma);
