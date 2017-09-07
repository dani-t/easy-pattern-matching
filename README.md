## What is easy-pattern-matching?

**easy-pattern-matching** is a pattern matcher inspired by Scala matching system. I created this project because I wanted to try, understand and implement something similar with Scala pattern matcher. Also there are other pattern matchers for JS in the web but I was looking for something lightweight.

## How to use it?

```
match("bla")(
  Case(5, "five"),
  Case(value => value === "y", value => "Y" + value),
  Case(other(), "other branch")
)
// returns "other branch"

match(5)(
  Case(5, "five"),
  Case(value => value === "y", value => "Y" + value),
  Case(other(), "other branch")
)
// returns "five"

match("y")(
  Case(5, "five"),
  Case(value => value === "y", value => "Y" + value),
  Case(other(), "other branch")
)
// returns "Yy"
```
