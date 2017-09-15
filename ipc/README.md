# IPC

Suppose we want to cache a remote data source in memory, we implement three different ways to update cache.

1. Force all workers update memory cache from remote with a long interval.
2. Check remote source if it is changed, and then update cache. Check action can be more frequently if the source don't change everytime.
3. Subscribe the remote source, do update when received data source changed. Need a subscriber.

We'll combine schedule and IPC to implement these features.

## start

```bash
$ npm start
```

It will start app with two workers when you run this command.
