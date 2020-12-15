const middleware = {}

middleware['checkauthenticated'] = require('../src/middleware/checkauthenticated.js')
middleware['checkauthenticated'] = middleware['checkauthenticated'].default || middleware['checkauthenticated']

export default middleware
