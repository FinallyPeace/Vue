1. `npm init`
2. `npm i json-server`

3. 在 package.json "scripts" 裡面自訂指令

```json
"scripts": {
    "json":"json-server --watch db.json --port 8080"
}
```

4. `npm run json`
5. 點開 http://localhost:8080, Postman 測試

支援以下 5 種 API
-   GET
-   POST -> Body -> raw -> JSON
-   PUT 一次更新整包，需打全部內容修改
-   PATCH 可指更新單一屬性
-   DELETE
