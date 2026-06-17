as react doesnt know it has to re-render the page, it only renders once on load, changing local variables doesnt trigger react to re-render components

local variables dont persist between reload/rerenders

to make applications truly INTERACTIVE/DYNAMIC
STATE- a components memory, special data that:
- Triggers a re-render when it changes (solving the screen update probelm)
- Persists between renders (solving the reset problem)

- shopping carts to add/remove items
- coutner

HOOKS - special functions that let u "hook into" react features
hook for managing state: useState

can only use hooks at highest level of program (not in loops, condition)
use in the order they are declared

useState phases:
- trigger
- render (snapshot)
- 


