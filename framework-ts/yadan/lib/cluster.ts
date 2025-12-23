import { startCluster, ClusterOptions } from 'egg'

export interface ClusterOptionsInt extends ClusterOptions {
  framework: string
  baseDir: string
  plugins: object | null
  workers: number
  port: number
  https: boolean
  key: string
  cert: string
  clusterPort: number
  title?: string
}

export interface ClusterMsg {
  action: 'egg-ready' | 'egg-pids'
  to: 'agent' | 'app'
  data?: ClusterOptionsInt | number[] | any
  from: 'agent' | 'app' | 'master'
}

// change window title
process.on('message', (msg: ClusterMsg) => {
  if (msg && msg.action) {
    const { action, data, from, to } = msg
    // let titleNew = data.title ? data.title : data.baseDir

    // process.ppid need node.js v8.10
    // console.info('::message:', process.pid, process.ppid, msg)
    console.info('::message:', process.pid, msg)
    console.info('::window title:' + process.title)
    if (action === 'egg-ready') {
      if (to === 'app' && from === 'master') {
        console.info('::app worker ready')
      }
      else if (to === 'agent' && from === 'master') {
        console.info('::agent worker ready')
      }
    }
  }
})


export default startCluster
// export default (options: ClusterOptions, cb: (...args: any[]) => any) => {
//   return startCluster(options, cb)
// }
