if [ -z "$(byobu list-sessions | grep my-app)" ]
then
  byobu new-session -d -t my-app
  byobu rename-window My-App
  byobu select-window -t my-app:0
  byobu send-keys 'make dev.server' Enter
  byobu split-window -h
  byobu send-keys 'make dev.browsersync' Enter
fi
byobu attach -t my-app
