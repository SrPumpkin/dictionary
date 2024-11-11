
export default function addDeps(data: string, props: object): string {
    let str = data

    for (let propsKey in props) {
        let reg = new RegExp(`<d.${propsKey}>`, 'gi')

        // @ts-ignore
        str = str.replace(reg, props[propsKey])
    }

    return str;
}