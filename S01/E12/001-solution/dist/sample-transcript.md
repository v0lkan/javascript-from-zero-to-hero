In this use case,
we'll create a command line application.
What we want to do is to read a bunch of subtitle files
and then clean up those files and by clean up,
I mean removing the redundant parts of those files
such as timestamps and section numbers
and certain meta tags.
and after cleaning up the files,
we'll save them to a separate distribution folder
or a dist folder as new files.
I'm planning to use those cleaned-up files
as transcripts for the video lessons of this course.
So this is not just a dummy application,
it's something practical that at least
I'll be needing and using.
So let's begin, shall we.
Here's how our typical transcript file looks like
and here is how the end result will look like
when we clean up the transcript file.
So in my project root,
there is a data folder that I have 30 or so
of those subtitle files that need cleaning up.
And again, under the project root,
I have created a dist folder
where we'll eventually save the cleaned up transcript files.
This run function will be our entry point
so let's outline what we want to do
inside that run function.
We want to get a list of transcript files
that we are going to process.
Then we'll initialize a buffer or a cache
that contains the names of those files
and we'll gradually consume that buffer
until all the files are processed
and there's nothing left in the buffer.
In essence, that's what our entire code will do.
So we are just going to fill in the blanks.
Also, since getting the files is more like an IO operation,
I'll require it from an ./io module
that we are going to create shortly
and we'll also move these cache-related init
and consume functions to their own ./cache module
and require it from there.
So let's first create this getTranscriptFiles method
as it is relatively simpler to implement.
First, we'll export this function like this
and then we'll write the body of the function.
So since this is an IO-related module,
I'll probably have to resolve paths and for that,
I'll require the join method of this path node module
which is a standard library function.
And also we'll be reading the subtitle files
and we are also going to create
and write clean up transcript files
and we'll need to list the contents of our ./data folder
to get a list of the subtitle files.
So for that, I'll add readFile, writeFile,
and readdir methods of the fs or file system node module.
Then I'll define my data and dist folders as constant paths
and I'll also define these two extensions as well.
So I'll read from the vtt subtitle files
and eventually save the cleaned-up transcript files
with markdown or md extension.
Since getTranscriptFiles is an async function,
we'll have to return a Promise from it.
And inside that promise,
we are going to read the contents of our data directory.
And if we cannot read the data directory for some reason,
we'll reject the promise and if everything is fine
and there is no error, we'll resolve the promise
with the list of files that we received.
So let's try this first.
I'll comment out the rest of the code
that we haven't written yet and once we run the code,
we get a list of files with ".vtt" extensions
so it looks good mostly but with just one problem.
We have this .keep file but I don't want to process
because it's not a subtitle file.
So how do I filter it out?
Well, since items is an array,
we can use the Array.prototype's filter method
to filter out the things that we don't want
out of that array.
So I don't want this .keep file;
and since I'm on a Mac system, sometimes my operating system
can create these .DS_Store files in my folders
and I don't want to include them in my file list as well
so I'll filter them out too.
And when we re-run the code,
we'll see that the .keep file is not included
in our list anymore so we are good.
That done, let's also create our cache module.
We'll need an init method to initialize our cache
and we'll need a consume method
that will gradually process what's inside the cache
until we exhaust everything that we have in the cache.
I'll create an internal store array.
And I'll also create this empty() function
which is a helper function
that checks the length of the array
and returns true if the store is indeed empty
and false otherwise.
And if our internal store is empty,
we'll immediate return a resolved promise
and that promise will indicate
that whatever we have in the store
has been consumed successfully.
Otherwise, we'll create a recursive promise chain
as follows:
First, we'll create a promise
that resolves with a subset of our batch
which is this getNextBatch function's return value
and then we'll chain that promise
to this consume method itself,
to process the next batch of items
on the next tick on a separate stack frame.
So as long as we have stuff in the store,
we'll chain consume and since consume returns a Promise,
we'll wait for its eventual fulfillment value.
And once the store is empty, we'll return a resolved promise
which will be our final resolution value
that will also end the chain of promises that we created.
So if this is the first time you are seeing
a recursive promise chain like this,
it might take a while to wrap your head around
so take your time and feel free to pause this video
and think about what this code is doing.
In the getNextBatch method,
I want to return a subset of items
and to determine the length of that subset,
I thought the amount of items
that we want to process in parallel need to be proportional
to the number of CPU cores that we have.
So roughly, I need to split my workload
across the number of CPUs that I have evenly.
So I'll get the number of CPUs by doing an os.cpus.length()
and then I'll splice my store array like this
and that code looks a bit funny but what it essentially does
is it will return the last CPU_COUNT items from the array
and then it will truncate the array.
So if we initially have 25 items in the array
and we have four CPU cores,
this function will return the last four items in the array
and also it will reduce the size of the array from 25 to 21.
And then when we call the getNextBatch again,
it will give another four items
and the size of the array will be reduced down to 17
and so on.
So let's log the length of the store here
and we also need to fill in this init method.
The init method was taking a list of files
so for each file that this init function receives,
we are going to push that file name to the store
and now when we run the code,
we can see that the consume is processing the store,
four by four, which is the number of CPU cores that I have
so it looks like that part of the code is working.
So I'll extract this dummy promise
into a cleanupFiles method which will take an array of files
and return a "resolved" promise and when we run the code,
it will work just as it did before.
And I also want to move this cleanupFiles to ./io.js
since we'll likely be reading files
and writing to files in that cleanupFiles function.
So that function is a better fit for the ./io module
and then we'll start writing the body of the function.
So to utilize all the CPU cores that we have,
we'll transform these files in parallel
and for that, we'll use Promise.all().
And since Promise.all() accepts an Array of Promises,
we'll map this files collection that we have
into an Array of Promises like this.
For now, I'll just log the file
and simply resolve the promise and test if the code works
and it looks like it's working.
And then for each file,
I'll read the file in the data directory
and then do a "clean up" transformation on the file
in this handleFileCleanup method.
I'll pass the resolve function
as an argument to handleFileCleanup
so that I can execute it from within that function as well.
And when I test it, it will run identical
to what we had before, nothing surprising.
So now, I'll just do a tiny change
and instead of passing file as a parameter,
I'll pass it as a destructured object like this
and again, it's just syntactic sugar
and nothing will change in the code execution.
Now I'll do something interesting and I'll increase
the order of this handleFileCleanup function.
So instead of a plain function,
it will be a function that returns a function
also known as a higher-order function.
For that, I'll take this error and data parameters here
and move them here.
And if you think about it,
nothing has changed in the code again.
And when we execute the code,
we'll still get the same output;
but this way, we have separated our concerns
just a little bit better.
Now let's fill in this handler
and if there is an error while reading the file,
we'll just reject and return like this.
And if we can read the file contents,
we'll write the file without modifying it at all
to the distribution directory.
The only thing that we are going to change
will be changing the file extension from vtt to markdown.
Again, if there is an error,
we are going to reject the promise
and if there is no error,
we are going to resolve with a success message.
And when we run the code,
we'll see that our ./dist folder is populated as we expected
Now let's say we want to change this data
instead of directly writing it.
So we are going to pass it through
a cleanVttContent function that we'll create shortly.
And since string clean up is more of a formatting thing,
I'm going to create the code inside a ./format module
and I'm going to require it here like this.
And for now, I'll just create an identity transformation
as in here or actually,
let's convert the content to UPPERCASE
just for the sake of testing it
to see a change in the output and then we'll run the code.
And when we look into the ./dist folder,
we'll see that the output text is all uppercase.
So our transformer is working.
We just need to define what to replace and how to replace it
which we'll do next.
For that, I'll create a bunch of constants first.
This BY_NEW_LINE is a regular expression
that we will use to split the text into an array of lines.
These two TAG regular expressions are to match
and remove the vtt author tags that you see here.
This VTT_ARROW is the timestamp arrow
that I want to filter out the entire line
if I see that arrow.
that I want to get rid of as well.
So when we split the data by this new line expression,
we get an array that we can work on.
Then we first filter out the blank lines by this expression
and after that, we exclude the lines
that have vtt arrows in them,
followed by excluding the vtt header as well.
Then we remove any lines that only contain a number
but nothing else and after that,
we join the array into a single string
by adding a new line at the end of each entry.
And finally, we remove the beginning
and ending author tags from the text
and return it as our outcome.
And that outcome will eventually be written
into the transcript markdown file.
Wow, that was a mouthful.
So let's test if it works.
But before that, I want to rename these variables
because I prefer using camelCase in regular expressions
but this is just a rename
so it won't impact how the code works anyway.
So when we run the code and check the output,
I see that all the contents have been cleaned up
and the resultant transcript markdown files
are reasonably easy to follow.
So they are ready to be added
to those lessons' pages as transcripts.
And this code actually saved me hours of frustration
and hours of manual editing time
so I'm really happy with this outcome.
And as the saying goes, don't do anything yourself
when a machine can do it for you.
