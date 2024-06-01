Then you can run Durdraw with:


    ./start-durdraw


To look at some included example animations:


    ./start-durdraw -p examples/*.dur


To edit 16-color PC Scene (MS-DOS/CP437) ANSI art files in a Utf-8 terminal, use the --16colors option:


    ./start-durdraw --16colors


## COMMAND LINE USAGE

You can play a .dur file or series of .dur files with:

    $ durdraw -p filename.dur
    $ durdraw -p file1.dur file2.dur file3.dur ...

Other command-line options:

<pre>

usage: start-durdraw [-h] [-p PLAY [PLAY ...]] [-q | -w | -x TIMES] [--256color | --16color] [-b]
                     [-W WIDTH] [-H HEIGHT] [-m] [--nomouse] [-A] [-u UNDOSIZE] [-V] [--debug]
                     [filename]

positional arguments:
  filename              .dur or ascii file to load

optional arguments:
  -h, --help            show this help message and exit
  -p PLAY [PLAY ...], --play PLAY [PLAY ...]
                        Just play .dur file or files, then exit
  -q, --quick           Skip startup screen
  -w, --wait            Pause at startup screen
  -x TIMES, --times TIMES
                        Play X number of times (requires -p)
  --256color            Try 256 color mode
  --16color             Try 16 color mode
  -b, --blackbg         Use a black background color instead of terminal default
  -W WIDTH, --width WIDTH
                        Set canvas width
  -H HEIGHT, --height HEIGHT
                        Set canvas height
  -m, --max             Maximum canvas size for terminal (overrides -W and -H)
  --nomouse             Disable mouse support
  --cursor CURSOR       Cursor mode (block, underscore, or pipe)
  --notheme             Disable theme support
  --theme THEME         Load a custom theme file
  --cp437               Encode extended characters using Code Page 437 (IBM-PC/MS-DOS) encoding
                        instead of Utf-8. (Needs CP437 capable terminal and font)
  --export-ansi         Export loaded art to an ANSI file and exit
  -u UNDOSIZE, --undosize UNDOSIZE
                        Set the number of undo history states - default is 100. More requires more
                        RAM, less saves RAM.
  -V, --version         Show version number and exit

</pre>

## INTERACTIVE USAGE/EDITING

Use the arrow keys (or mouse) and other keys to edit, much like a text editor.
You can use the "Esc" (or "Meta") key to access commands:

```
  .. Art Editing .....................   .. About ...........................
  : F1-F10 - insert character        :   : version: {ver}                   :
  : esc-up - next fg color           :   : color mode: {colormode}          :
  : esc-down - prev fg color         :   : character encoding: {charmode}   :
  : esc-right - next bg color (16c)  :   :..................................:
  : esc-left - prev bg color         :
  : esc-/ - insert line              :   .. Animation .......................
  : esc-' - delete line              :   : esc-k - next frame               :
  : esc-. - insert column            :   : esc-j - previous frame           :
  : esc-, - delete column            :   : esc-p - start/stop payback       :
  : esc-] - next character group     :   : esc-n - clone frame              :
  : esc-[ - previous character group :   : esc-N - append empty frame       :
  : esc-S - change character set     :   : esc-d - delete frame             :
  : esc-y - eyedrop (pick up color)  :   : esc-D - set frame delay          :
  : esc-l - color character          :   : esc-+/esc-- - faster/slower      :
  : esc-c - color picker             :   : esc-R - set playback/edit range  :
  : shift-arrows - select for copy   :   : esc-g - go to frame #            :
  : esc-K - mark selection           :   : esc-M - move frame               :
  : esc-v - paste                    :   :..................................:
  :..................................:
                                         .. UI/Misc .........................
  .. File Operations .................   : esc-m - main menu                :
  : esc-C - new/clear canvas         :   : esc-t - mouse tools              :
  : esc-o - open                     :   : esc-z - undo                     :
  : esc-s - save                     :   : esc-r - redo                     :
  :..................................:   : esc-V - view mode                :
                                         : esc-i - file/canvas info         :
  .. Canvas Size .....................   : esc-I - character inspector      :
  : esc-" - insert line              :   : tab - focus canvas or colors     :
  : esc-: - delete line              :   : ctrl-l - redraw screen           :
  : esc-> - insert column            :   : esc-h - help                     :
  : esc-< - delete column            :   : esc-q - quit                     :
  :..................................:   :..................................:
                                                            Prev   Next
                                                            Frame  Frame
                                                            |      |
Main   Frame     Speed     Frame   Play/Edit  Mouse   First | Play |  Last
Menu   Number      |       Delay   Range      Tools   Frame | Pause|  Frame
 |     |           |        |       |          |         |  |  |   |  |
[Menu] F: 1/8    <FPS>: 8   D: 0.00 R: 1/8   [Move]      |< << |> >> >|  
```

## CONFIGURATION

You can create a custom startup file where you can set a theme.


If you did not already do so during installation, you can install a sample configuration and some themes into ~/.durdraw/ with the command:

bin/sh

    ./installconf.sh


This will place durdraw.ini into ~/.durdraw/ and the themes into ~/.durdraw/themes/.

Here is an example durdraw.ini file:

<pre>
; Durdraw 0.20 Configuration File
[Theme]
theme-16: ~/.durdraw/themes/purpledrank-16.dtheme.ini
theme-256: ~/.durdraw/themes/mutedform-256.dtheme.ini
</pre>