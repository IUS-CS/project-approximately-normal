package com.backend.util;

import java.util.Optional;

public class Assert {

    public static <T> T found(Optional<T> obj, String objName) {
        if(!obj.isPresent()) {
            throw new IllegalArgumentException(objName + " not found");
        }
        return obj.get();
    }

    public static <T> T found(Optional<T> obj) {
        if (!obj.isPresent()) {
            throw new IllegalArgumentException();
        }
        return obj.get();
    }
}
