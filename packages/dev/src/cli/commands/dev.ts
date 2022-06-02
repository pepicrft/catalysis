import { Command } from '@gestaltjs/core/cli'
import { project } from '@gestaltjs/core/cli'
import { devProject } from '../services/dev'

// eslint-disable-next-line import/no-default-export
export default class Dev extends Command {
  static description = 'Dev your Gestalt project'

  static args = [
    { name: 'target', required: true }
  ]
  static flags = {
    ...Command.globalFlags,
    ...Command.projectFlags,
  }

  async run(): Promise<void> {
    const { flags, args } = await this.parse(Dev)
    const loadedProject = await project.load(flags.path)
    const { onChange } = await devProject({ project: loadedProject, targetName: args.target })
  }
}
