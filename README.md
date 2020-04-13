# TimeTrack
Quick and dirty way to track time on a REPL

## Why?
Because time-tracking is a pain, and I haven't found a better 
tool for it. They require too much interaction, imo.  I 
wanted something extremely simple but also completely 
controllable.  

This tool is also personal.  I don't like estimating, 
especially when I'm contracting.  If I am going to bill 
hourly, I want to have the hours recorded and sum-able, so I
don't have to think about it.  So I track time in small 
increments.  For those that are okay estimating, or don't like
popping over to a terminal to execute a command whenever their
tasks change in a way that affects tracking, this tool may not 
be for you.  

## Usage
on the command line, just type

`node time work`

The supported values for `time` are: "work," "break," and 
"start."  Anything else will be treated like "work."  Each 
simply appends the current time to a file (see [time](/time.js))
and appends the option on a line immediately after that.  
Eventually, you have a file that looks like this:
```
   9/19/2019 10:13:12 AM
   start
   9/19/2019 4:10:12 PM
   work
   9/19/2019 11:40:53 PM
   break
   9/20/2019 1:17:17 AM
   work
...
``` 
This makes it easy to parse by a human, or a program, such as
[track](track.js).  If one keeps a terminal open, it's very easy
to execute the above commands very quickly as one switches 
between work, a break, etc.  

Another great feature is the output is to a flat file, so if you
make a mistake, it couldn't be simpler to correct manually.

The path to the file is defaulted for ease.  I recommend 
overwriting the default to keep the commands short, but it's 
your choice, of course.

## Tracking
So now you have this file, but then what?  Add all the times up
manually?  That's actually what I used to do!  But now there is 
[track](track.js) that sums up the times, per week.
