---
sidebar_position: 3
title: Profiler
tags:
  - framework-feature
  - profiler
---

Profiling is a crucial aspect of optimizing your application's performance
and gaining a deeper insight into the request handling process.
It can significantly expedite the debugging process.

Apiato incorporates the third-party package [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar)
to gather profiling data.

By default, this package presents the profiling data directly in the browser.
Nevertheless,
Apiato employs the `Apiato\Core\Middlewares\Http\ProfilerMiddleware` to include the profiling data in the response.

The profiler feature is initially disabled by default.
To enable it, you should edit the `.env` file and set `DEBUGBAR_ENABLED=true`.

To customize and manage the profiler response,
you'll need to make adjustments in the configuration file located at `app/Ship/Configs/debugbar.php`.

The following is an example of the profiler response:
```json
{
    "_profiler": {
        "__meta": {
            "id": "X167f293230e3457f1bbd95d9c82aba4a",
            "datetime": "2017-09-22 18:45:27",
            "utime": 1506105927.799299,
            "method": "GET",
            "uri": "/",
            "ip": "172.20.0.1"
        },
        "messages": {
            "count": 0,
            "messages": []
        },
        "time": {
            "start": 1506105922.742068,
            "end": 1506105927.799333,
            "duration": 5.057265043258667,
            "duration_str": "5.06s",
            "measures": [
                {
                    "label": "Booting",
                    "start": 1506105922.742068,
                    "relative_start": 0,
                    "end": 1506105923.524004,
                    "relative_end": 1506105923.524004,
                    "duration": 0.7819359302520752,
                    "duration_str": "781.94ms",
                    "params": [],
                    "collector": null
                },
                {
                    "label": "Application",
                    "start": 1506105923.535343,
                    "relative_start": 0.7932748794555664,
                    "end": 1506105927.799336,
                    "relative_end": 0.00000286102294921875,
                    "duration": 4.26399302482605,
                    "duration_str": "4.26s",
                    "params": [],
                    "collector": null
                }
            ]
        },
        "memory": {
            "peak_usage": 13234248,
            "peak_usage_str": "12.62MB"
        },
        "exceptions": {
            "count": 0,
            "exceptions": []
        },
        "route": {
            "uri": "GET /",
            "middleware": "api, throttle:30,1",
            "domain": "http://api.apiato.test",
            "as": "apis_root_page",
            "controller": "App\\Containers\\Welcome\\UI\\API\\Controllers\\Controller@apiRoot",
            "namespace": "App\\Containers\\Welcome\\UI\\API\\Controllers",
            "prefix": "/",
            "where": [],
            "file": "app/Containers/Welcome/UI/API/Controllers/Controller.php:20-25"
        },
        "queries": {
            "nb_statements": 0,
            "nb_failed_statements": 0,
            "accumulated_duration": 0,
            "accumulated_duration_str": "0μs",
            "statements": []
        },
        "logs": {
            "count": 3,
            "messages": [
                {
                    "message": "...",
                    "message_html": null,
                    "is_string": false,
                    "label": "error",
                    "time": 1506105927.694807
                },
                {
                    "message": "...",
                    "message_html": null,
                    "is_string": false,
                    "label": "error",
                    "time": 1506105927.694811
                },
                {
                    "message": "[2017-09-18 17:38:15] testing.INFO: New User registration. ID = 970ylqvaogmxnbdr | Email = apiato@mail.test.      Thank you for signing up.\n</div>\n</body>\n</html>\n  \n",
                    "message_html": null,
                    "is_string": false,
                    "label": "info",
                    "time": 1506105927.694812
                }
            ]
        },
        "auth": {
            "guards": {
                "web": "array:2 [\n  \"name\" => \"Guest\"\n  \"user\" => array:1 [\n    \"guest\" => true\n  ]\n]",
                "api": "array:2 [\n  \"name\" => \"Guest\"\n  \"user\" => array:1 [\n    \"guest\" => true\n  ]\n]"
            },
            "names": ""
        },
        "gate": {
            "count": 0,
            "messages": []
        }
    }
}
```
