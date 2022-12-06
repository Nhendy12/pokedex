class Pokemon < ApplicationRecord
    has_and_belongs_to_many :types
    validates :name, :types, :presence => true
    has_one_attached :image

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end
end
