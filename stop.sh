byobu select-window -t my-app:0
byobu select-pane -t 0
byobu send-keys c-c
byobu send-keys c-c
byobu select-pane -t 1
byobu send-keys c-c
byobu send-keys c-c
byobu kill-session -t my-app
