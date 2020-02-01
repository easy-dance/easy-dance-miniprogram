/**约舞接口相关类型 */
interface DanceListItem {
  name: string,
  address: string,
  verbPerson: string, //发起人
  date: string, // YYYY-mm-dd
}
export interface DanceList {
  list: Array<DanceListItem>
}