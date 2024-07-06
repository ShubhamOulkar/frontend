# Children()

Childern() api is used to transform children, run same code on children, count children and convert children into an array. But avoid using it because deep nested children are not traversed.

Nodes that are valid children :- Elements, string, number, empty node (boolean, nulls, undefined), Fragments <></> also considered as children.

- 1. Children.count(children_prop):number :- number of children received from children prop.
- 2. Children.forEach(childern_prop, fun, thisArg?):undefined :- It is similar to forEach() array method. fun is callback function to perform same opeartions on children. thisArg is optional it is value with which `fun` is called otherwise it is undefined.
- 3. Children.only(children_prop):- IF children is single element and valid then return that element. Otherwise it throws error.
- 4. Children.map(children_prop, fun, thisArg?): array
- 5. Children.toArray(childer):array :- empty nodes are elliminated from return array. Converting into array help us to use filter, sort, reverse function to manipulate elements.

## Special about children prop:-

children prop is internally replresented as array in react but what about children is only one?
Then react do not create array of single children, it create plain object of the children.

## Special about Children() api :-

As we know chilren prop is sometime array object or sometimes plain object, still this api dont break our code. Infact if there is array then react key prop on each return child.

# cloneElement(element, props_obj, ...children)

This api is used when you want to create new element from a existing elements.
New element means adding extra props into existing element or adding children into elements.
