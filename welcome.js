import os from 'os'
export function osType () {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}