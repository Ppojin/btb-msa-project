package com.btb.user.data;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, String> {
    UserEntity listAll();
    UserEntity findByEmail(String email);
    UserEntity findByCustomerPK(String customerKey);
}
