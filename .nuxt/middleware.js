const middleware = {}

middleware['checkauthenticated'] = require('../src/middleware/checkauthenticated.ts')
middleware['checkauthenticated'] = middleware['checkauthenticated'].default || middleware['checkauthenticated']

export default middleware
