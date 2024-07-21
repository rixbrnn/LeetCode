// this is an experimentation on how to figure out whether 2 nodes on the same graph are connected, as seen in:
// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/

export const buildDisjointSet = (vertexes, edges) => {
    const disjointSet = vertexes.map(v => v);
    for(const edge of edges){
        const base = edge[0];
        const target = edge[1];
        if(base < target){
            disjointSet[target] = base;
        }else{
            disjointSet[base] = target;
        }
    }
    return disjointSet;
}

export const isConnected = (baseEdge, targetEdge, disjointSet) => {
    const currentBaseRoot = findRoot(baseEdge, disjointSet);
    const currentTargetRoot = findRoot(targetEdge, disjointSet);
    return currentTargetRoot === currentBaseRoot;
}

const findRoot = (vertex, disjointSet) => {
    let currentRoot = disjointSet[vertex];
    while(disjointSet[currentRoot] !== currentRoot){
        currentRoot = disjointSet[currentRoot];
    }
    return currentRoot;
}



