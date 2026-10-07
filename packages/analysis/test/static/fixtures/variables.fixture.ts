
export const VARIABLES =
{
    EMPTY: "let name;",
    CONST: "const name = 'const';",
    LET: "let name = 'let';",
    VAR: "var name = 'var';",
    MULTIPLE: "let name1 = (1 + 2) * 3, name2, name3 = 'foo';",
    EXPRESSION: `const number = new Number(Math.ceil(Math.random()) + 10).toString();`,
    ARRAY: "const array = [ 'value1', 'value2' ];",
    OBJECT: "const object = { key1: 'value1', key2: 'value2' };",
    REGEX: "const regex = /regex/g;",
    DESTRUCTURING_ARRAY: "const [value1, value2 = true] = array;",
    DESTRUCTURING_OBJECT: "const {key1, key2 = false} = object;",
    DESTRUCTURING_OBJECT_RENAME: "const {key1: alias1, key2: alias2} = object;",
    DESTRUCTURING_OBJECT_NESTED: "const {key1: {key2, key3: alias3}} = object;",
    DESTRUCTURING_OBJECT_DEFAULT: "const {key1: alias1 = true} = object;",
    DESTRUCTURING_OBJECT_STRING_KEY: "const {'key-1': alias1} = object;",
    DESTRUCTURING_OBJECT_COMPUTED_KEY: "const {[key1 + 1]: alias1 = false} = object;",
    DESTRUCTURING_OBJECT_COMPUTED_KEY_WITHOUT_ALIAS: "const {[key1]} = object;",
    DESTRUCTURING_ARRAY_WITH_KEY: "const [value1, key1: value2] = array;",
    KEYWORD_AS_NAME: "const as = 'value';",
    KEYWORD_AS_VALUE: "const alias = as;"
};
