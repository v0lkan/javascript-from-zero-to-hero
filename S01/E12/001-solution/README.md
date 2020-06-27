```text
  \
  \\,
   \\\,^,.,,.                    “Zero to Hero”
   ,;7~((\))`;;,,               <zerotohero.dev>
   ,(@') ;)`))\;;',    stay up to date, be curious: learn
    )  . ),((  ))\;,
   /;`,,/7),)) )) )\,,
  (& )`   (,((,((;( ))\,
```

## Running the Example

This example does not have any dependencies; so you can simply execute…

```bash
node .
```

… inside this folder to test it.

If everything works, you should see a `./dist/sample-transcript.md` generated.

## Running an Infintie Promise Loop

Execute…

```bash
node loop.js
```

… inside this folder and observe how **Node.js** consumes your memory and CPU
to eventually crash itself.

Here’s what I get eventually when I run the above command:

```bash
node loop.js

<--- Last few GCs --->

[18610:0x5806c10]    27315 ms: Scavenge 2019.7 (2030.8) -> 2016.9 (2032.3) MB, 8.9 / 0.0 ms  (average mu = 0.098, current mu = 0.040) allocation failure
[18610:0x5806c10]    27329 ms: Scavenge 2021.2 (2032.3) -> 2018.9 (2035.6) MB, 11.2 / 0.0 ms  (average mu = 0.098, current mu = 0.040) allocation failure
[18610:0x5806c10]    27342 ms: Scavenge 2024.4 (2035.6) -> 2021.8 (2053.8) MB, 10.4 / 0.0 ms  (average mu = 0.098, current mu = 0.040) allocation failure


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x13da519]
Security context: 0x2982978c0921 <JSObject>
    1: loop [0x8714f345d29] [/home/volkan/Documents/PROJECTS/zerotohero/javascript-from-zero-to-hero/S01/E12/001-solution/loop.js:~25] [pc=0x3405e06434bb](this=0x2982978ffba1 <JSGlobal Object>)
    2: arguments adaptor frame: 1->0
    3: StubFrame [pc: 0x13b7472]
    4: StubFrame [pc: 0x1384e40]
    5: EntryFrame [pc: 0x13641f8]

==== Details ====================...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xa0e670 node::Abort() [node]
 2: 0xa0ea9c node::OnFatalError(char const*, char const*) [node]
 3: 0xb83afe v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xb83e79 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xd32305  [node]
 6: 0xd32996 v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [node]
 7: 0xd41209 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]
 8: 0xd42045 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 9: 0xd436df v8::internal::Heap::HandleGCRequest() [node]
10: 0xcf1c55 v8::internal::StackGuard::HandleInterrupts() [node]
11: 0x1057573 v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [node]
12: 0x13da519  [node]
Aborted (core dumped)
```
