package com.btb.user.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, String> {
    List<UserEntity> findAll();
    UserEntity findByEmail(String email);
    UserEntity findByCustomerPk(String customerKey);
}
