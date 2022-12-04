class Pokemon < ApplicationRecord
    has_and_belongs_to_many :types
    validates :name, :types, :presence => true
end
