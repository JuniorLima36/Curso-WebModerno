const exec = new Set()

exec.add(1)
exec.add(3)
exec.add(8)

console.log(exec)

console.log(exec.size)
console.log(exec.has(9))
exec.delete(3)

console.log(exec)