type Head = {
    key: string;
    name: string;
}[]

// // generate dynamic type according to value of name property in Head
// type HeadType = {
//     [P in keyof Head]: Head[P]['name']
//     // Head[number]['name'] : string
// }

// type bv = Head[number]['name'] 
// type nb = keyof Head

// type Head = string[]
type _Body = {
    [x in Head[number]['name']]: string | number
}

const heading = [
    { key: 'name', name: 'Name' }, { key: 'age', name: 'Age' }, { key: 'address', name: 'Address' }
] as Head;

function _dynamic(head: Head, body: _Body[]) {

    const heading = head.map(x => x.key)

    let html = ''
    body.forEach(item => {
        html += ``
        heading.forEach(key => {
            html += ` - ${item[key]}`
        })
        html += `\n`
    })
    console.log(html)
}

_dynamic(heading, [{ name: 'sachin', age: 30, place: 'bangalore' }, { name: 'shahul', age: 27, place: 'mlp' }])


