human
=====

show seconds in a human-readable form

Usage
-----

This repository comes with a couple of implementations of the base algorithm in
different languages.  You can use any by simply dropping the logic into your
source code.

Example (C)
-----------

compile

    make

run

    $ ./human 65
    1 minute
    $ ./human 600
    10 minutes

With the C example, you can optionally pass `-s` to get a suffix

    $ ./human 57483
    15 hours
    $ ./human -s 57483
    15 hours from now
    $ ./human -s -57483
    15 hours ago

License
-------

MIT
