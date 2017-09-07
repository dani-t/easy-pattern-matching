## What is easy-pattern-matching?

**easy-pattern-matching** is a working in progress pattern matcher inspired by Scala. I created this project because I wanted to try, understand and implement something similar with Scala pattern matcher. Also there are other pattern matchers for JS in the web but I was looking for something lightweight.

## How to use it?

```
match("bla")(
  Case(5, 4),
  Case(value => value === "y", value => "Y" + value),
  Case(other(), "other branch")
)
```
