/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

// Creating a promise chain is not strictly recursive because each
// `then(fn)`’s `fn` is executed in its own stack.
//
// HOWEVER; the resulting promise will need to maintain a chain of
// resolutions, so that once (if) the promise chain eventually resolves,
// it will pass the resolution value all the way up to the first promise.
//
// That’s why, if you don’t limit the depth of your promise chains you
// may leak memory and even crash the entire Node.js process if there’s
// not enough heap space left for Node.js to consume.
//
// Here is a one-liner to exhaust your Node.js app and crash it.

const loop = async () => Promise.resolve(true).then(loop);
loop();

// Terminal output will be similar to this:
//
//
// <--- Last few GCs --->
//
// [31436:0x103800c00]    17448 ms: Scavenge 1388.2 (1423.2) -> 1387.8 (1423.7) MB, 1.9 / 0.0 ms  (average mu = 0.162, current mu = 0.129) allocation failure
// [31436:0x103800c00]    17454 ms: Scavenge 1388.5 (1423.7) -> 1388.1 (1424.2) MB, 5.2 / 0.0 ms  (average mu = 0.162, current mu = 0.129) allocation failure
// [31436:0x103800c00]    17456 ms: Scavenge 1388.8 (1424.2) -> 1388.4 (1425.2) MB, 2.3 / 0.0 ms  (average mu = 0.162, current mu = 0.129) allocation failure
//
//
// <--- JS stacktrace --->
//
// ==== JS stack trace =========================================
//
//     0: ExitFrame [pc: 0x3113334fb7d]
//     1: StubFrame [pc: 0x3113333e7f8]
//     2: StubFrame [pc: 0x3113331c6d2]
//     3: EntryFrame [pc: 0x31133305c9e]
//     4: ExitFrame [pc: 0x3113334fb7d]
// Security context: 0x2e871991d969 <JSObject>
//     5: _tickCallback [0x2e87f5993b49] [internal/process/next_tick.js:43] [bytecode=0x2e875eb3c269 offset=49](this=0x2e87827823d9 <process map = 0x2e875fccc941>)
//     6: /* anonymous */ [0x2e87bb559791] [internal/m...
//
// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
//  1: 0x10003a9d9 node::Abort() [/usr/local/bin/node]
//  2: 0x10003abe4 node::FatalTryCatch::~FatalTryCatch() [/usr/local/bin/node]
//  3: 0x10019ed17 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
//  4: 0x10019ecb4 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
//  5: 0x1005a5882 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
//  6: 0x1005a4838 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
//  7: 0x1005a2443 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
//  8: 0x1005aecbc v8::internal::Heap::AllocateRawWithLightRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/usr/local/bin/node]
//  9: 0x1005aed3f v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/usr/local/bin/node]
// 10: 0x10057dfc4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [/usr/local/bin/node]
// 11: 0x100832070 v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [/usr/local/bin/node]
// 12: 0x3113334fb7d
// 13: 0x3113333e7f8
// 14: 0x3113331c6d2
