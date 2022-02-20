import { Command } from '@oclif/core'
import { logger } from '@gestaltjs/core/cli'

export default class Migrate extends Command {
  static description = 'Build your Gestalt application'

  async run(): Promise<void> {
    logger.core.success('Migrated')
  }
}
