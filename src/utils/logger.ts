import chalk from 'chalk'

class Logger {
    error(...args: unknown[]): void {
        console.log(
            chalk.red(`[ERROR] :: ${args}`)
        )
    }

    warning(...args: unknown[]): void {
        console.log(
            chalk.yellow(`[WARNING] :: ${args}`)
        )
    }

    info(...args: unknown[]): void {
        console.log(
            chalk.green(`[INFO] :: ${args}`)
        )
    }
}

export default new Logger()