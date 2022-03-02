import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import dotenv from 'dotenv';
import UserModel from '../user/entity/models/UserModel';

dotenv.config();

const passportConf = passport

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_AUTH_SECRET
}

passportConf.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('USER ID', jwt_payload);
    UserModel.findOne({id: jwt_payload.id}, function(err: any, user: any) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

export default passportConf