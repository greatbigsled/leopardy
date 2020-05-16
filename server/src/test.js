array.forEach(f => {
    /* eslint-disable no-param-reassign */
    f.children = array.filter(g => g.parentId === f.id).map(g => omit(keysToFilter, g));
    /* eslint-disable no-param-reassign */
});

const byParentId = {}
array.forEach(f => {
    const pid = f.parentId
    if (byParentId[pid]) {
        byParentId[pid].push(f)
    } else {
        byParentId[pid] = [f]
    }
})

array.forEach(f => {
    const pid = f.parentId
    if (pid) {

    }
})
