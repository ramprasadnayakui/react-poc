import React from "react";


export default function thunk() {
    return (
      <div>
        <p>
          Action creators create objects of "type" and "payload", as "type" takes a string its better to declare it constant to avoid redundancy → objects/actions are dispatched to the store → the store invokes reducers and  forwards a message (the action object) to the reducer → reducers generate new state → listeners are notified of state updates.
        </p>
        <p>
          Redux Thunk is a middeware library that sits in between dispatched actions and the reducer. When it sees a thunk is dispatched, it passes some methods into the returned function that can be used to dispatch further actions, like a success or error event.
        </p>
        <p>A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer</p>
        <p>In its basic form <strong>a Redux middleware is a function returning a function, which takes next as a parameter. Then the inner function returns another function which takes action as a parameter and finally returns</strong> <code class="language-text">next(action)</code>. Here's how it looks like:</p>
      </div>
    )
}