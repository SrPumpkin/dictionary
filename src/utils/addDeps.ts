
export default function addDeps(data, props: object) {
    let str = data
    let checkReg = new RegExp("<d\.[A-Za-z]+>", "gi")

    if (checkReg.test(str) && Object.keys(props).length === 0) {
        throw new Error("[Dictionary] You need to add a parameter for the string")
    }

    for (let propsKey in props) {
        let reg = new RegExp(`<d.${propsKey}>`, 'gi')

        // @ts-ignore
        str = str.replace(reg, props[propsKey])
    }

    return str;
}

