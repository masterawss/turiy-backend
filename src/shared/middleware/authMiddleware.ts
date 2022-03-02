import passportConf from '../../auth/passportConf'

export default passportConf.authenticate('jwt', {session: false})