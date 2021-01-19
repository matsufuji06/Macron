require 'rails_helper'
describe User do
  describe '#create' do
    it "nameがない場合は登録できないこと" do
      user = User.new(name: nil, email: "kkk@gmail.com", password: "00000000", password_confirmation: "00000000")
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")
    end
    it "emailがない場合は登録できないこと" do
      user = User.new(name: "manabu", email: nil, password: "00000000", password_confirmation: "00000000")
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")
    end
  end
end