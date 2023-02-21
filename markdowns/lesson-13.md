EVENT PROPAGATION
                     addEventListener('event-name', handler)
- cupturing phase || bubbling phase
|          window - currentTarget
- cupturing phase || bubbling phase
|        document - currentTarget
- cupturing phase || bubbling phase
|          parent - currentTarget
- cupturing phase || bubbling phase
|           child - currentTarget
-    target phase || bubbling phase
_       descedent - target

- stopPropagation() - `yes` handler, `no` bubling
- stopImmidiatePropagation() - `no` handler, `no` bubling

EVANT DELEGATION

parent - currentTarget
.children == collection of child - target