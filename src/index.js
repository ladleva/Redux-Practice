import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/rootReduser";
import "./styles.css";
import { increment, decrement, asyncIncrement } from "./redux/actions";
import thunk from "redux-thunk";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0, applyMiddleware(thunk));

addBtn.addEventListener("click", () => {
    store.dispatch(increment());
});

deleteBtn.addEventListener("click", () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
    store.dispatch(asyncIncrement());
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch({ type: "INIT_APPLICATION" });

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});