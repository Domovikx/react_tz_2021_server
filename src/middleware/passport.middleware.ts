import passportJWT from 'passport-jwt';
import { JWT_KEY } from '../config/config';
import { PassportStatic } from 'passport';
import { UsersModel } from '../models/users.model';

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY,
};

export const passportMiddleware = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await UsersModel.findById(payload.userID).select(
          'email id',
        );

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    }),
  );
};
