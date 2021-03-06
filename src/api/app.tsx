import http from './http'

export default {
    // 登录
    login(data) {
        return http.post('/api/auth/login', data)
    },
    loginByNuctech(data) {
        return http.post('/api/auth/login/nuctech', data)
    },
    fetchTodos(data) {
        return http.get('/api/tenement', data)
    },
    fetchTodo(id: string, data) {
        return http.put('/api/todo/' + id, data)
    },
    // -首页
    fetchHomePageinfo(data) {
        return http.get('/api/home/pageinfo', data)
    },
    fetchHomeCalendarPlotInfo(data) {
        return http.get('/api/home/calendar', data)
    },
    fetchOperationList(data) {
        return http.get('/api/operation', data)
    },
    fetchOperationDetailById(id) {
        return http.get('/api/operation/' + id)
    }
}
