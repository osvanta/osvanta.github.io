---
layout: ../../../../layouts/Help.astro
title: Calculated signals
summary: Create new signals from formulas, with the full list of functions and operators.
order: 10
---

A calculated signal is a new signal worked out from others by a formula. Once created, it is plotted, measured and exported like any other signal.

## Create one

<video class="clip" autoplay loop muted playsinline preload="metadata" aria-label="Calculated Signal is clicked, the signal is named, a measurement signal is added to the formula, the formula is finished, and the new signal appears in the tree">
  <source src="/clips/calculated-light.mp4" type="video/mp4" media="(prefers-color-scheme: light)">
  <source src="/clips/calculated-dark.mp4" type="video/mp4">
</video>

1. Click **Calculated Signal** in the top row.
2. Give the signal a name and write its formula.
3. Press `Shift+F3`, or use **Insert function**, to pick a function from the list. It shows every function, operator and constant by category, with its arguments and an example.

Signals in a formula are written as channel, message and signal inside backticks, for example `` `CH1::Engine::Speed` ``. Pick them from the signal picker and the name is written for you.

Calculated signals are saved in [configurations](/products/bus-log-analyzer/help/configurations-and-sessions/).

## Examples

| Goal | Formula |
|---|---|
| Convert km/h to m/s | `` `CH1::Vehicle::Speed` / 3.6 `` |
| Limit a value to 0…100 | `` clamp(`CH1::Engine::Throttle`, 0, 100) `` |
| 1 while speed is above 50, else 0 | `` IF(`CH1::Vehicle::Speed` > 50, 1, 0) `` |
| Acceleration from speed | `` derivative(`CH1::Vehicle::Speed`) `` |
| Distance from speed | `` integral(`CH1::Vehicle::Speed`) `` |
| Smooth over 10 samples | `` rolling_mean(`CH1::Engine::Speed`, 10) `` |

The signal names above are made up; use the ones in your own measurement.

## Math

| Function | Result |
|---|---|
| `abs(x)` | Absolute value |
| `sqrt(x)` | Square root; negative input gives NaN |
| `exp(x)` | e raised to the power of x |
| `log(x)`, `log10(x)`, `log2(x)` | Natural, base-10 and base-2 logarithm; zero or negative input gives NaN |
| `pow(a, b)` | a raised to the power of b |
| `sign(x)` | −1, 0 or 1 depending on the sign of x |
| `mod(a, b)` | Remainder of a / b; the result takes the sign of b |

## Rounding and selection

| Function | Result |
|---|---|
| `round(x)` or `round(x, n)` | Round to n decimal places, 0 if omitted |
| `floor(x)` | Round down to the nearest integer |
| `ceil(x)` | Round up to the nearest integer |
| `trunc(x)` | Round toward zero |
| `min(a, b)`, `max(a, b)` | The smaller or the larger of a and b, sample by sample |
| `clamp(x, lo, hi)` | x limited to the range lo to hi |

## Conditions, comparison and logic

| Function or operator | Result |
|---|---|
| `IF(condition, then_value, else_value)` | then_value where the condition is nonzero, else_value elsewhere |
| `<`, `<=`, `>`, `>=`, `==`, `!=` | Comparison: 1 where true, 0 where false |
| `AND`, `OR` | True where both are nonzero; true where either is nonzero |
| `NOT` | True where x is zero |

## Bitwise

| Operator | Result |
|---|---|
| `&`, <code>&#124;</code>, `^` | Bitwise AND, OR and XOR |
| `~` | Bitwise NOT: every bit inverted |
| `<<`, `>>` | Shift the bits left or right by n places |

## Trigonometry

| Function | Result |
|---|---|
| `sin(x)`, `cos(x)`, `tan(x)` | Sine, cosine and tangent, x in radians |
| `asin(x)`, `acos(x)` | Arcsine and arccosine in radians; an input beyond ±1 gives NaN |
| `atan(x)`, `atan2(y, x)` | Arctangent in radians; the angle of the point (x, y) |
| `degrees(x)`, `radians(x)` | Convert radians to degrees, and degrees to radians |

Constants: `pi` and `e`.

## Time

| Function | Result |
|---|---|
| `lag(signal, samples)` | The value from an earlier sample; missing history gives NaN |
| `delay(signal, seconds)` | The value that many seconds earlier, held between samples; missing history gives NaN |
| `rolling_sum(signal, samples)` | Sum of the current and previous samples; an incomplete window gives NaN |
| `rolling_mean(signal, samples)` | Mean over the same window; also spelled `rolling_avg` |
| `integral(signal)` | Cumulative time integral, with each value held until the next sample |
| `derivative(x)` | Change per second between one sample and the one before it |

For the time functions the first argument must be a plain signal. For an expression, make it a calculated signal of its own first, then use that one.

## Diagnostic counter

`diag(event, increment, decrement)` is a counter that starts at 0. It goes up by the increment while the event is nonzero, and otherwise down by the decrement without going below 0. It models the debounce counter of a diagnostic monitor: use it to see when a fault condition would have matured.

## Formulas are safe to share

A formula, including one in a configuration file someone sends you, is parsed into this fixed set of operations and rejected otherwise. It is never run as program code.
