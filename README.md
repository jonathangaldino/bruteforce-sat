# A _Bruteforce_ approach to solve SAT

> Of course, any execution time values may vary from computer to computer

## Start

Build and run first.

> Following the expression: `(c AND d) OR (d AND ~c AND f) OR (e AND b)`

Bruteforcing to find values:

```bash
$ yarn start

? Which algorithm do you want to execute? bruteforce
? Enter a valid expression: (c AND d) OR (d AND ~c AND f) OR (e AND b)
Is this expression SAT?
A: Yes! Of 32 combinations found undefined that will make this expression truthy.

Execution Time: 4.023ms
```

Verifying values:

- c: false
- d: false
- ~c: true
- f: false
- e: true
- b: true

```bash
$ yarn start

? Which algorithm do you want to execute? verifier
? Enter a valid expression: (c AND d) OR (d AND ~c AND f) OR (e AND b)
? Enter a value for c: true
? Enter a value for d: true
? Enter a value for f: true
? Enter a value for e: true
? Enter a value for b: true

Result:  Yes! It is SAT.
Execution Time: 0.493ms
Done in 19.08s.
```

## Setup

### Build the project

```bash
$ yarn build
```

### Run after building

```bash
$ yarn start
```

### Development

```bash
$ yarn cli:dev
```

or to work on the bruteforce, use:

```bash
$ yarn dev
```
