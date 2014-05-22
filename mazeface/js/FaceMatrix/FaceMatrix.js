/**
 * FACEMATRIX Global Abatement
 */
var FACEMATRIX = {}; /*global 2*/
 
FACEMATRIX.namespace = function (aNamespace){
    var parts = aNamespace.split('.'),
        parent = FACEMATRIX,
        i;
    if (parts[0] === "FACEMATRIX") {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }

    return parent;
};