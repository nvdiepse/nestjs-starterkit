export interface BaseServiceInterface {
  store(data);
  updateById(id, data);
  findOne(id);
  deleteById(id);
}