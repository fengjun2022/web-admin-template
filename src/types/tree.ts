// * 菜单管理模块

export interface ReqAssignPermision {
  roleId: string
  permissionId: string
}

export interface ReqAddPermission {
  code: string
  level: number
  name: string
  pid: string
  toCode: string
  type: string
}

export interface ResPermisionList {
  id?: string
  pid?: string // 父级权限菜单的id
  level?: number // 菜单层级
  name?: string
  select?: boolean // 菜单是否选中
  children?: ResPermisionList[]
  code?: string // 权限值
  type?: number // 权限类型，type=1为菜单 type=2为按钮
}
